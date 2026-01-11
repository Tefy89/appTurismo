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
import { TourGuideEntity } from './tour-guide.entity';

@Entity('guide_certifications', { schema: 'core' })
export class GuideCertificationEntity {
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

  /** Foreign Keys **/
  @ManyToOne(() => TourGuideEntity)
  @JoinColumn({ name: 'guide_id' })
  guide: TourGuideEntity;
  @Column({
    type: 'uuid',
    name: 'guide_id',
    nullable: true,
    comment: 'Guía turístico',
  })
  guideId: string;

  @ManyToOne(() => CatalogueEntity)
  @JoinColumn({ name: 'certification_id' })
  certification: CatalogueEntity;
  @Column({
    type: 'uuid',
    name: 'certification_id',
    nullable: true,
    comment: 'Certificación',
  })
  certificationId: string;

  /** Columns **/
  @Column({
    name: 'issued_at',
    type: 'date',
    comment: 'Fecha de emisión',
  })
  issuedAt: Date;

  @Column({
    name: 'expired_at',
    type: 'date',
    comment: 'Fecha de vencimiento',
  })
  expiredAt: Date;

  @Column({
    name: 'id_temp',
    type: 'bigint',
    comment: 'Codigo de la tabla migrada',
  })
  idTemp: number;
}
