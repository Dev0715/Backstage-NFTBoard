import { ApiProperty } from '@nestjs/swagger';

export class NftDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    NFT_Address: string;

    @ApiProperty()
    shared: boolean;

    @ApiProperty()
    Blockchain: string;

    @ApiProperty()
    Token_ID: string;

    @ApiProperty()
    IPFS_Address: string;

    @ApiProperty()
    Meta_Data: string;

    @ApiProperty()
    Number_of_like: number;

    @ApiProperty()
    Privacy: string;

    @ApiProperty()
    Collection: string;

    @ApiProperty()
    image_url: string;
}