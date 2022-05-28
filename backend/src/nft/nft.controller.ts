import {
    Body,
    Controller,
    Get,
    Param,
    Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UploadService } from 'src/common/upload/upload.service';
import { NftService } from './nft.service';
import { NftDto } from './dtos/nft.dto';

@Controller('api/nft')
@ApiTags('Nft')
export class NftController {
    constructor(
        private readonly uploadService: UploadService,
        private readonly nftService: NftService
    ) {}
    @Get('get_nft')
    @ApiOkResponse({ type: NftDto })
    async getNft(): Promise<any> {
        const nfts = await this.nftService.getAllNft();
        return { success: true, nfts: nfts.map(nft => nft.toNftDto()) };
    }
    @Get('item/:id')
    @ApiOkResponse({ type: NftDto })
    async getNftItemById(@Param('id') id: number): Promise<any> {
        const nft_item = await this.nftService.findById(id);
        if (nft_item) {
            return { success: true, nft: nft_item.toNftDto() };
        } else {
            return { success: false, message: "Can't find the NFT item"}
        }
        
    }
    @Post('save_nft')
    @ApiOkResponse({ type: NftDto })
    async saveNft(
        @Body() body: any
    ) {
        console.log('body', body);
        const specificOne = await this.nftService.findSpecificOne(body.NFT_Address, body.Token_ID);
        if(specificOne) {
            return {success: false, error: 'You have already saved this token'};
        }
        const savedNft = await this.nftService.saveNft(body);
        return {success: true, nft: savedNft}
    }

    @Post('share_nft')
    // @ApiOkResponse({ type: NftDto })
    async shareNft(
        @Body() body: any
    ) {
        await this.nftService.shareNft(body);
        return {success: true};
        // const specificOne = await this.nftService.findSpecificOne(body.NFT_Address, body.Token_ID);
        // if(specificOne) {
        //     return {success: false, error: 'You have already saved this token'};
        // }
        // const savedNft = await this.nftService.saveNft(body);
        // return {success: true, nft: savedNft}
    }

    @Post('delete_nfts')
    // @ApiOkResponse({ type: NftDto })
    async deleteNfts(
        @Body() body: any
    ) {
        await this.nftService.deleteNfts(body);
        return {success: true};
        // const specificOne = await this.nftService.findSpecificOne(body.NFT_Address, body.Token_ID);
        // if(specificOne) {
        //     return {success: false, error: 'You have already saved this token'};
        // }
        // const savedNft = await this.nftService.saveNft(body);
        // return {success: true, nft: savedNft}
    }
}