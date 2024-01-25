import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  text: string;

  @Column({ type: 'enum', enum: ['h', 's', 'a'] })
  /**
   * h - happy
   * s - sad
   * a - any
   */
  category: string;

  @Column({ type: 'boolean' })
  archived: boolean;

  @Column({ type: 'timestamp' })
  date: Date;
}
