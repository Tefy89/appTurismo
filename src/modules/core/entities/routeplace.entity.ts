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
import { ClassificationEntity } from '@modules/core/entities/classification.entity';
import { TouristRouteEntity } from './tourist-route.entity';
import { PlaceEntity } from './place.entity';

@Entity('routes_places', { schema: 'core' })
export class RoutePlaceEntity {
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
  @ManyToOne(() => TouristRouteEntity, { nullable: true })
  @JoinColumn({ name: 'route_id' })
  route: TouristRouteEntity;
  @Column({
    type: 'uuid',
    name: 'route_id',
    nullable: true,
    comment: 'Foreign key de la ruta turística',
  })
  routeId: string;

  @ManyToOne(() => PlaceEntity)
  @JoinColumn({ name: 'place_id' })
  place: PlaceEntity;
  @Column({
    type: 'uuid',
    name: 'place_id',
    nullable: true,
    comment: 'Foreign key del lugar',
  })
  placeId: string;
  /** Columns **/
  @Column({
    name: 'visitOrder',
    type: 'number',
    comment: 'Orden de visita',
  })
  visitOrder: number;

  @Column({
    name: 'id_temp',
    type: 'bigint',
    comment: 'Codigo de la tabla migrada',
  })
  idTemp: number;
}
