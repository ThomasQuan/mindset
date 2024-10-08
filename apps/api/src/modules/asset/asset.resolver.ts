import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { AssetService } from './asset.service';
import { CreateAssetInput } from './dto/createAsset.input';
import { UpdateAssetInput } from './dto/updateAsset.input';
import { FindManyAssetsInput } from './dto/findManyAssets.input';
import { Asset } from 'src/@generated/prisma-nestjs-graphql/asset/asset.model';

@Resolver(() => Asset)
export class AssetResolver {
  constructor(private readonly assetService: AssetService) {}

  @Mutation(() => Asset)
  createAsset(@Args('createAssetInput') createAssetInput: CreateAssetInput) {
    return this.assetService.create(createAssetInput);
  }

  @Query(() => [Asset], { name: 'assets' })
  assets(
    @Args('findManyAssetsInput', { nullable: true })
    findManyAssetsInput?: FindManyAssetsInput,
  ) {
    return this.assetService.findMany(findManyAssetsInput);
  }

  @Query(() => Asset, { name: 'asset' })
  asset(@Args('id', { type: () => ID }) id: string) {
    return this.assetService.findOne(id);
  }

  @Mutation(() => Asset)
  updateAsset(@Args('updateAssetInput') updateAssetInput: UpdateAssetInput) {
    return this.assetService.update(updateAssetInput.id, updateAssetInput);
  }

  @Mutation(() => Asset)
  deleteAsset(@Args('id', { type: () => ID }) id: string) {
    return this.assetService.delete(id);
  }
}
