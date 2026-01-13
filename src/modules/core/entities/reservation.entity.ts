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
  @OneToMany(() => ClassificationEntity, (entity) => entity.activity)
  classifications: ClassificationEntity[];

  /** Foreign Keys **/
  @ManyToOne(() => CatalogueEntity, { nullable: true })
  @JoinColumn({ name: 'geographic_area_id' })
  geographicArea: CatalogueEntity;
  @Column({
    type: 'uuid',
    name: 'geographic_area_id',
    nullable: true,
    comment: 'Continente y Galapagos',
  })
  geographicAreaId: string;

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
    comment: 'Costo total de la reservacion',
  })
  totalCost: number;

  @Column({
    name: 'status',
    type: 'varchar',
    comment: 'Estado de la reservacion',
  })
  status: string;
}
