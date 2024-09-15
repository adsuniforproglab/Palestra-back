import { Strategy } from "passport-jwt";
import { Repository } from "typeorm";
import { UserEntity } from 'src/modules/user/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    validate(payload: any): Promise<UserEntity>;
}
export {};
