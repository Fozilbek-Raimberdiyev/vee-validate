import Button from "primevue/button"
import Dialog from "primevue/dialog"
import DataTable from "primevue/datatable"
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';    
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';

export default function setAllComponentGlobalPrimeVue(app : any) {
    app["component"]("Button", Button)
    app["component"]("Dialog", Dialog)
    app["component"]("DataTable", DataTable)
    app["component"]("Column", Column)
    app["component"]("ColumnGroup", ColumnGroup)
    app["component"]("Row", Row)
    app["component"]("InputText", InputText)
    app["component"]("TextArea", Textarea)
    app["component"]("Calendar", Calendar)
}