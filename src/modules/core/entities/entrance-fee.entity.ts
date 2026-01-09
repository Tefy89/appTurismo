import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CatalogueEntity } from '@modules/common/catalogue/catalogue.entity';
import { PlaceEntity } from './place.entity';

@Entity('entrance_fees', { schema: 'core' })
export class EntranceFeeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_timestampP',
    comment: 'Fecha de creacion del registro',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_timestampP',
    comment: 'Fecha de actualizacion de la ultima actualizacion del registro',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Fecha de eliminacion del registro',
  })
  deletedAt: Date;

  @Column({
    name: 'enabled',
    type: 'boolean',
    default: true,
    comment: 'true=visible, false=no visible',
  })
  enabled: boolean;

  /** Inverse Relationship **/

  /** Foreign Keys **/
  @ManyToOne(() => PlaceEntity, { nullable: true })
  @JoinColumn({ name: 'place_id' })
  place: PlaceEntity;
  @Column({
    type: 'uuid',
    name: 'place_id',
    nullable: true,
    comment: 'Lugar Turistico',
  })
  placeId: string;

  @ManyToOne(() => CatalogueEntity)
  @JoinColumn({ name: 'visitor_type_id' })
  visitorType: CatalogueEntity;

  @Column({
    name: 'visitor_type_id',
    type: 'uuid',
    nullable: false,
    comment: 'Tipo de visitante',
  })
  visitorTypeId: string;

  /** Columns **/
  @Column({
    name: 'price',
    type: 'float',
    comment: 'Precio de entrada',
  })
  price: number;

  @Column({
    name: 'currency',
    type: 'varchar',
    comment: 'Moneda',
  })
  currency: string;
}
