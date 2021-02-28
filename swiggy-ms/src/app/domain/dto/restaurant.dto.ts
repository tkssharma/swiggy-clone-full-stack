import { ApiProperty, ApiQuery } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsObject, IsOptional, IsString, IsUUID, MinLength, ValidateNested } from "class-validator";
import { Type as ValidateType } from 'class-transformer';
import { Query } from "@nestjs/common";

export enum MealType {
    breakfast = 'breakfast',
    lunch = 'lunch',
    dinner = 'dinner',
  }
  export enum CuisineType {
    indian = 'indian',
    north_indian = 'north_indian',
    south_indian ='south_indian'
  }

export class CreateRestaurantMenuParam {

    @ApiProperty({ description: '', required: true })
    @IsString()
    @MinLength(2)
    public name!: string;

    @ApiProperty({ description: '', required: true })
    @IsString()
    @MinLength(2)
    public type!: string;


    @ApiProperty({ name: 'meal_type', enum: MealType, required: true })
    @IsNotEmpty()
    @IsEnum(MealType)
    public meal_type!: MealType

    @ApiProperty({ description: '', required: false })
    @IsOptional()
    @IsString()
    public media!: string;

    @ApiProperty({ description: '', required: false })
    @IsOptional()
    @IsString()
    public banner!: string;

    @ApiProperty({ description: '', required: true })
    @IsString()
    public price!: string;

    @ApiProperty({ name: 'cuisine_type', enum: CuisineType, required: true })
    @IsNotEmpty()
    @IsEnum(CuisineType)
    public cuisine_type!: CuisineType

    @ApiProperty({ description: '', required: false })
    @IsOptional()
    @IsString()
    public desc!: string;

}
export class RestaurantParamById {
    @ApiProperty({ description: '', required: true })
    @IsUUID()
    public id!: string;
}

export class RestaurantMenuParamById {
    @ApiProperty({ description: '', required: true })
    @IsUUID()
    public id!: string;

    @ApiProperty({ description: '', required: true })
    @IsUUID()
    public menuId!: string;
}


export class AddressDto {

    @ApiProperty({ description: 'postal_code of profile', required: true })
    @IsOptional()
    @IsString()
    public street_address!: string;

    @ApiProperty({ description: 'address of profile', required: true })
    @IsOptional()
    @IsString()
    public house_no!: string;

    @ApiProperty({ description: 'address of profile', required: true })
    @IsOptional()
    @IsString()
    public city!: string;

    @ApiProperty({ description: 'address of profile', required: true })
    @IsOptional()
    @IsString()
    public postal_code!: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    public landmark!: string;


    @ApiProperty({ required: true })
    @IsOptional()
    @IsString()
    public state!: string;

    @ApiProperty({ required: true })
    @IsOptional()
    @IsObject()
    public position!: object;
}

export class UpdateRestaurantParam {

    @ApiProperty({ description: '', required: true })
    @IsUUID()
    public id!: string;

    @ApiProperty({ description: '', required: false })
    @IsOptional()
    @IsString()
    @MinLength(2)
    public name!: string;

    @ApiProperty({ description: '', required: false })
    @IsOptional()
    @IsString()
    @MinLength(4)
    public website!: string;

    @ApiProperty({ description: '', required: false })
    @IsOptional()
    @IsString()
    @MinLength(4)
    public about_us!: string;

    @ApiProperty({ description: '', required: false })
    @IsOptional()
    @IsObject()
    @ValidateNested()
    @ValidateType(() => AddressDto)
    public address!: AddressDto;
}

export class CreateRestaurantParam {

    @ApiProperty({ description: '', required: true })
    @IsString()
    @MinLength(2)
    public name!: string;

    @ApiProperty({ description: '', required: true })
    @IsOptional()
    @IsString()
    @MinLength(4)
    public website!: string;

    @ApiProperty({ description: '', required: true })
    @IsString()
    @MinLength(4)
    public about_us!: string;

    @ApiProperty({ description: '', required: true })
    @IsObject()
    @ValidateNested()
    @ValidateType(() => AddressDto)
    public address!: AddressDto;
}