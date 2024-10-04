import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { AuthPermission, AuthGroup } from "./index.ts"

@Entity('auth_group_permissions')
export class AuthGroupPermissions extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToOne(() => AuthPermission, { eager: true })
    @JoinColumn({ name: 'permission_id' })
    permission?: AuthPermission;

    @ManyToOne(() => AuthGroup)
    @JoinColumn({ name: 'group_id' })
    group?: AuthGroup;

}