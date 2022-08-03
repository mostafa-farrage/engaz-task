import { FormGroup } from '@angular/forms';
import { ResponseViewModel } from './response.model';

export class CRUDCreatePage{
    form: FormGroup;
    isSerching: boolean = false;
    isUploading: boolean = false;
    isEdit: boolean = false;
    isSaving: boolean = false;
    isDeleting: boolean = false;
    responseViewModel: ResponseViewModel;
    isPageLoaded: boolean = false;
}