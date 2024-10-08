import { Injectable } from '@nestjs/common';
import { CreateAssetInput } from './dto/createAsset.input';
import { UpdateAssetInput } from './dto/updateAsset.input';
import { FindManyAssetsInput } from './dto/findManyAssets.input';
import { BaseService } from '../base/base.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Asset } from 'src/@generated/prisma-nestjs-graphql/asset/asset.model';

@Injectable()
export class AssetService extends BaseService<
  Asset,
  CreateAssetInput,
  UpdateAssetInput,
  FindManyAssetsInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, 'asset', Asset);
  }
}
