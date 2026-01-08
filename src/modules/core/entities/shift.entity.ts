import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PlaceSchedulesEntity } from './place_schedule.entity';

@Entity('shifts', { schema: 'core' })
export class ShiftEntity {
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

  /** Inverse Relationship **/
  @OneToMany(() => PlaceSchedulesEntity, (schedule) => schedule.shift)
  schedules: PlaceSchedulesEntity[];

  @Column({
    name: 'enabled',
    type: 'boolean',
    default: true,
    comment: 'true=visible, false=no visible',
  })
  enabled: boolean;

  /** Columns **/
  @Column({
    name: 'from_hour',
    type: 'integer',
    comment: 'hora de inicio',
  })
  fromHour: number;

  @Column({
    name: 'from_minute',
    type: 'integer',
    comment: 'minuto de inicio',
  })
  fromMinute: number;

  @Column({
    name: 'to_hour',
    type: 'integer',
    comment: 'hora de fin',
  })
  toHour: number;

  @Column({
    name: 'to_minute',
    type: 'integer',
    comment: 'minuto de fin',
  })
  toMinute: number;

  @Column({
    name: 'status',
    type: 'boolean',
    comment: 'Estado del turno',
  })
  status: boolean;

  @Column({
    name: 'id_temp',
    type: 'bigint',
    comment: 'Codigo de la tabla migrada',
  })
  idTemp: number;
}
