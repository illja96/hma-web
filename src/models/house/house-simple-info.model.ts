import { UserSimpleInfo } from '../user/user-simple-info.model';

export class HouseSimpleInfo {
    public id: string;
    public name: string;

    public ownerInfo: UserSimpleInfo;
    public memberInfos: UserSimpleInfo[];

    public creationDate: Date;
}
