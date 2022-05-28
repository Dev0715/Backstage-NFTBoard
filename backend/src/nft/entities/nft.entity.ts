import { Column, Entity, BeforeInsert, Exclusion } from 'typeorm';
import { SoftDelete } from 'src/common/core/soft-delete';
import { NftDto } from '../dtos/nft.dto';

@Entity('nft')
export class NFT extends SoftDelete {
  @Column()
  id: string;

  @Column()
  NFT_Address: string;

  @Column({ nullable: true, default: false })
  shared: boolean;

  @Column()
  Blockchain: string;

  @Column()
  Token_ID: string;

  @Column()
  IPFS_Address: string;

  @Column()
  Meta_Data: string;

  @Column()
  Number_of_like: number;

  @Column()
  Privacy: string;

  @Column()
  Collection: string;

  @Column()
  image_url: string;

  toNftDto(): NftDto {
    return {
      id: this.id,
      NFT_Address: this.NFT_Address,
      shared: this.shared,
      Blockchain: this.Blockchain,
      Token_ID: this.Token_ID,
      IPFS_Address: this.IPFS_Address,
      Meta_Data: this.Meta_Data,
      Number_of_like: this.Number_of_like,
      Privacy: this.Privacy,
      Collection: this.Collection,
      image_url: this.image_url,
    };
  }
}
