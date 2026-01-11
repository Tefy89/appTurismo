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
import { TourGuideEntity } from './tour-guide.entity';

@Entity('reservations', { schema: 'core' })
export class ReservationEntity {
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
  @ManyToOne(() => TouristRouteEntity)
  @JoinColumn({ name: 'route_id' })
  route: TouristRouteEntity;
  @Column({
    type: 'uuid',
    name: 'route_id',
    nullable: true,
    comment: 'Foreign key de la ruta turistica',
  })
  routeId: string;

  @ManyToOne(() => TourGuideEntity)
  @JoinColumn({ name: 'tour_guide_id' })
  tourGuide: TourGuideEntity;
  @Column({
    type: 'uuid',
    name: 'tour_guide_id',
    nullable: true,
    comment: 'Foreign key de la guía turística',
  })
  tourGuideId: string;

  /** Columns **/
  @Column({
    name: 'date',
    type: 'date',
    comment: 'Fecha',
  })
  date: Date;

  @Column({
    name: 'time',
    type: 'time',
    comment: 'Hora',
  })
  time: string;

  @Column({
    name: 'total_cost',
    type: 'float',
    comment: 'Costo total',
  })
  totalCost: number;

  @Column({
    name: 'status',
    type: 'varchar',
    comment: 'Estado',
  })
  status: string;

  @Column({
    name: 'id_temp',
    type: 'bigint',
    comment: 'Codigo de la tabla migrada',
  })
  idTemp: number;
}
