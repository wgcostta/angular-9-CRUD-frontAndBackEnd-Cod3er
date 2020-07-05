import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadTempTabelaDataSource, ProductReadTempTabelaItem } from './product-read-temp-tabela-datasource';

@Component({
  selector: 'app-product-read-temp-tabela',
  templateUrl: './product-read-temp-tabela.component.html',
  styleUrls: ['./product-read-temp-tabela.component.css']
})
export class ProductReadTempTabelaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProductReadTempTabelaItem>;
  dataSource: ProductReadTempTabelaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ProductReadTempTabelaDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
