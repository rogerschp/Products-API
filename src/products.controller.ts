import { Product } from './products.model';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

//Esse tambem lista todos os produtos
@Controller('products')
export class productsController {
  products: Product[] = [
    new Product('LIV01', 'Livro TDD e BDD na pratica', 29.9),
    new Product('LIV02', 'Livro iniciando com flutter', 39.9),
    new Product('LIV03', 'Inteligencia artificial como servico', 29.9),
  ];

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  //Funcao abaixo lista os produtos
  @Get(':id')
  getOne(@Param() params): Product {
    return this.products[0];
  }

  //Criar Produto
  @Post()
  create(@Body() product: Product) {
    product.id = 100;
    this.products.push(product);
  }

  //Alterar Prooduto
  @Put()
  update(@Body() product: Product): Product {
    return product;
  }

  @Delete(':id')
  delete(@Param() params) {
    this.products.pop();
  }
}
