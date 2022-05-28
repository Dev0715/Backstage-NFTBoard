import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { NFT } from './entities/nft.entity';

@Injectable()
export class NftService {
  constructor(
    @InjectRepository(NFT)
    private readonly NftRepository: Repository<NFT>,
  ) {}

  getAllNft(): Promise<NFT[]> {
    return this.NftRepository.find();
  }

  findById(id: number): Promise<NFT> {
    console.log('nft_id', id);
    return this.NftRepository.findOne({
      where: { id },
    });
  }

  findSpecificOne(NFT_Address: string, Token_ID: number): Promise<NFT> {
    return this.NftRepository.findOne({
      where: {
        NFT_Address,
        Token_ID,
      },
    });
  }

  saveNft(nft: any): Promise<NFT> {
    const nftData: NFT = { ...nft };
    return this.NftRepository.save(nftData);
  }

  async shareNft(body: any): Promise<NFT> {
    let item = await this.NftRepository.findOne({
      where: { id: body.id },
    });

    item.shared = body.shared;
    return await this.NftRepository.save(item);
  }

  deleteNfts(body: any): Promise<DeleteResult> {
    return this.NftRepository.delete({ NFT_Address: body.user_id });
  }
}
