import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

export const TableProducts = ({ products }) => {
  return (
    <div>
        <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
            <DataTable value={products} scrollable scrollHeight="flex" size='small'
            paginator rows={15}
            paginatorTemplate="PrevPageLink PageLinks NextPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} productos">
                <Column field="name" header="Nombre"></Column>
                <Column field="description" header="Descripción"></Column>
                <Column field="list3" header="Precio"></Column>
            </DataTable>
        </div>
    </div>
  )
}
