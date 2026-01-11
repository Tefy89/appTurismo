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
import { RoutePlaceEntity } from './routeplace.entity';
import { ReservationEntity } from './reservation.entity';

@Entity('tourist_routes', { schema: 'core' })
export class TouristRouteEntity {
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

  @OneToMany(() => RoutePlaceEntity, (routePlace) => routePlace.route)
  routePlaces: RoutePlaceEntity[];

  @OneToMany(() => ReservationEntity, (reservation) => reservation.route)
  reservations: ReservationEntity[];

  /** Columns **/
  @Column({
    name: 'name',
    type: 'varchar',
    comment: 'Nombre de la ruta',
  })
  name: string;

  @Column({
    name: 'description',
    type: 'text',
    comment: 'Descripcion de la ruta',
  })
  description: string;

  @Column({
    name: 'duration',
    type: 'float',
    comment: 'Duración de la ruta',
  })
  duration: number;

  @Column({
    name: 'created_on',
    type: 'float',
    comment: 'Fecha de creacion de la ruta',
  })
  createdOn: number;

  @Column({
    name: 'id_temp',
    type: 'bigint',
    comment: 'Codigo de la tabla migrada',
  })
  idTemp: number;
}
