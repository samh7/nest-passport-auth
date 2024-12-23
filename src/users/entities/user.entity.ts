import { IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {

    @PrimaryGeneratedColumn()
    id: number;


    @Column({ unique: true })
    email: string;

    @Column()
    password: string;
}
