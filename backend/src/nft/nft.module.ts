import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadModule } from 'src/common/upload/upload.module';
import { NFT } from './entities/nft.entity';
import { NftController } from './nft.controller';
import { NftService } from './nft.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([NFT]),
      UploadModule
    ],
    controllers: [NftController],
    providers: [NftService],
    exports: [NftService],
  })
  export class NftModule {}