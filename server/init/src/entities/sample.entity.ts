import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SampleT {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", nullable: true })
  message?: string;
}
