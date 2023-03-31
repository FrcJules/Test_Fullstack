import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  nomLoueur: string;

  @Column()
  email: string;

  @Column()
  marque: string;

  @Column()
  modele: string;

  @Column()
  annee: number;

  @Column()
  cityId: string;

  @Column()
  prix: number;

  @Column()
  photo: string;
}
