import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Producto } from './Producto.entity';

@Entity()
export class Ventas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'bigint', unique: true})
  ventaFactura: number;

  @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  fechaVenta: Date;

  @ManyToMany(() => Producto)
  @JoinTable()
  productos: Producto[];
  
  /* tener en cuenta...
  @Column({type: 'text', array: true})
  cantidadVenta: number[];*/
  
  @Column()
  totalAPagar: number;

  @Column()
  efectivo: number;

  @Column()
  cambio: number;
/*
  constructor() {
    this.productos = [];
  }*/

  constructor() {
    this.totalAPagar = 0;
  }
}
