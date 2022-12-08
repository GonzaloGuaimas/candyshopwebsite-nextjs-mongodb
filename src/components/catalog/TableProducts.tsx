import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button'
import { FilterMatchMode } from 'primereact/api'

export const TableProducts = ({ products }: {products: any}) => {
  const [globalFilter, setGlobalFilter] = useState('')
  const [globalFilterDrop, setGlobalFilterDrop] = useState('')
  const categories = [{name: 'ALFAJORES', value:'ALF'}, {name: 'BEBIDAS', value:'BEB'}, {name: 'COMESTIBLES', value:'COM'}, {name: 'CHOCOLATES', value:'CHOC'},
  {name: 'GOLOSINAS', value:'GOL'}, {name: 'GALLETAS', value:'GALL'}, {name: 'SNACK', value:'SNACK'}, {name: 'VARIOS', value:'VAR'}]
  const [filters, setFilters] = useState<any>()
  const clearFilters = () => {
    initFilters()
  }

  const onGlobalFilterChange = (e: any) => {
      const value = e.target.value
      let _filters = { ...filters }
      _filters['name'].value = value

      setFilters(_filters)
      setGlobalFilter(value)
  }
  const onDropFilterChange = (e: any) => {
    const value = e.target.value
    let _filters = { ...filters }
    _filters['category'].value = value

    setFilters(_filters)
    setGlobalFilterDrop(value)
}
  useEffect(() => {
    initFilters()
  },[])
  const initFilters = () => {
    setFilters({
      'name': { value: null, matchMode: FilterMatchMode.CONTAINS },
      'description': { value: null, matchMode: FilterMatchMode.CONTAINS },
      'category': { value: null, matchMode: FilterMatchMode.CONTAINS }
  })
    setGlobalFilter('')
    setGlobalFilterDrop('')
}

  const header = (
    <div className="table-header">
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText type="search" value={globalFilter} onChange={onGlobalFilterChange} placeholder="Buscar producto" />
        </span>
        <Dropdown optionLabel='name' optionValue='value' value={globalFilterDrop} options={categories} onChange={onDropFilterChange} placeholder="Categoría"/>
        <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" aria-label="Cancel" onClick={() => clearFilters()}/>
    </div>
  )
  return (
    <div>
        <div className="card" style={{ height: 'calc(100vh - 145px)' }}>
            <DataTable value={products} scrollable scrollHeight="flex" size='small'
            paginator rows={8} header={header} filters={filters}
            paginatorTemplate="PrevPageLink PageLinks NextPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} productos">
                <Column field="name" header="Nombre"></Column>
                <Column field="description" header="Descripción"></Column>
                <Column field="list3" header="Precio"></Column>
                <Column field="category" header="Categoria"></Column>
            </DataTable>
        </div>
    </div>
  )
}
