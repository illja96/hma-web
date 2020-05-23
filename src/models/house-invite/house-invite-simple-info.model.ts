import { HouseSimpleInfo } from '../house/house-simple-info.model';
import { UserSimpleInfo } from '../user/user-simple-info.model';

export class HouseInviteSimpleInfo {
  public id: string;
  public houseInfo: HouseSimpleInfo;
  public invitedBy: UserSimpleInfo;
  public createdAt: Date;
}
