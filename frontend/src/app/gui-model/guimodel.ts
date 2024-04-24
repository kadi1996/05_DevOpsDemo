/* tslint:disable:max-line-length */
export class GuiModel {

    private _guiModel = {

        "application": {
            "title": "DevOpsDemo FS2024",

//Formulare hinzufügen 
            "formList": [
            
//____________________Formularfelder für Module_____________________________________
{
    "id": "ModuleForm",
    "title": "Neues Modul hinzufügen",
    "formFieldList": [
        {
            "id": "moduleName",
            "type": "textfield",
            "name": "Modulname",
            "placeholder": "Geben Sie den Namen des Moduls ein",
            "required": true,
            "width": 2
        },
        {
            "id": "moduleDescription",
            "type": "textarea",
            "name": "Beschreibung",
            "placeholder": "Beschreiben Sie das Modul",
            "required": false,
            "width": 2
        },
        {
            "id": "moduleCredits",
            "type": "numberfield",
            "name": "ECTS-Credits",
            "placeholder": "Anzahl der ECTS-Credits",
            "required": true,
            "width": 1
        },
        {
            "id": "moduleCategory",
            "type": "select",
            "name": "Kategorie",
            "options": ["Informatik", "Wirtschaft", "Recht", "Design"],
            "required": true,
            "width": 1
        },
        {
            "id": "moduleStartDate",
            "type": "datefield",
            "name": "Startdatum",
            "placeholder": "Wann beginnt das Modul?",
            "required": true,
            "width": 2
        },
        {
            "id": "moduleEndDate",
            "type": "datefield",
            "name": "Enddatum",
            "placeholder": "Wann endet das Modul?",
            "required": false,
            "width": 2
        },
        {
            "type": "okButton",
            "name": "Speichern"
        },
        {
            "type": "cancelButton",
            "name": "Abbrechen"
        }
    ]
},
{
    "id": "ModuleForm",
    "title": { default: "Module" },
    "url": "/module",
    "formFieldList": [
        {
            "id":   "title",
            "type": "text",
            "name": { default: "Name Modul" },
            "required": true,
            "width": 2
        },
        {
            "id":   "title",
            "type": "text",
            "name": { default: "ECTS-Credits" },
            "required": true,
            "width": 2
        },
        {
            "id":   "title",
            "type": "text",
            "name": { default: "Kategorie" },
            "required": true,
            "width": 2
        },
        {
            "id": "description",
            "type": "text",
            "name": { default: "Notiz" },
            "newRow": true,
            "maxLength": 4000,
            "height": 4,
            "width": 2
        },

        {
            "type": "cancelButton",
            "name": "Cancel"
        },
        {
            "type": "okButton",
            "name": "Ok"
        }
    ]
},



            
//_________________OwnerUserForm______________________________________   

                {
                    "id": "OwnUserForm",
                    "title": "NotImplemented",
                    "formFieldList": [
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },

                {
                    "id": "NotImplementedForm",
                    "title": "Not Implemented",
                    "url": "/dummyform",
                    "headerVisible": false,
                    "footerVisible": false,
                    "borderStyle": "None",
                    "formFieldList": [
                        {
                            "id": "NotImplemented",
                            "type": "label",
                            "name": "NotImplementedMessage",
                            "width": 2
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "NotImplementedFormModal",
                    "title": "NotImplemented",
                    "url": "/dummyform",
                    "formFieldList": [
                        {
                            "id": "NotImplemented",
                            "type": "label",
                            "name": "NotImplementedMessage",
                            "width": 2
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ToDoForm",
                    "title": { default: "ToDo" },
                    "url": "/todo",
                    "formFieldList": [
                        {
                            "id":   "title",
                            "type": "text",
                            "name": { default: "Titel" },
                            "required": true,
                            "width": 2
                        },
                        {
                            "id": "description",
                            "type": "text",
                            "name": { default: "Text" },
                            "newRow": true,
                            "maxLength": 4000,
                            "height": 4,
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],

            // Main Menu
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "pageLabel",
                            "value": "<h4>Willkommen bei DevOps</h4>",
                            "newRow": true
                        },
                        {
                            "type": "button",
                            "name": { default: "ToDo-List" },
                            "icon": "fa-file-alt",
                            "color": "wet-asphalt",
                            "page": "toDoPage",
                            "width": 2,
                            "newRow": true,
                        },

                        {
                            "type": "button",
                            "name": { "default": "Module" },
                            "icon": "fa-file-alt",
                            "color": "orange",
                            "page": "modulePage",
                            "width": 2,
                            "newRow": true,
                        },

                        {
                            "type": "button",
                            "name": { "default": "Klausuren" },
                            "icon": "fa-file-alt",
                            "color": "babyblue",
                            "page": "exams",
                            "width": 2,
                            "newRow": true,
                        },
                    ]
                },

                //Seite für die Kachel "Klausuren" hinzufügen
                {

                    "id": "exams",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": { "default": "Klausureinsicht" },
                            "icon": "fa-plus",
                            "color": "green",
                            "width": 2,
                            "form": { "form": "ModuleForm" }
                        },
                        {
                            "type": "newButton",
                            "name": { "default": "Klausurtermine" },
                            "icon": "fa-plus",
                            "color": "pink",
                            "width": 2,
                            "form": { "form": "ModuleForm" }
                        },
                        {
                            "type": "button",
                            "name": { "default": "Kontakt Student Services" },
                            "icon": "fa-plus",
                            "color": "yellow",
                            "width": 2,
                            "form": { "form": "ModuleForm" }
                        },
                        {
                            "type": "button",
                            "name": { "default": "Student Jobs" },
                            "icon": "fa-plus",
                            "color": "red",
                            "width": 2,
                            "form": { "form": "ModuleForm" }
                        },
                        {
                            "type": "button",
                            "name": { "default": "Schwarzes Brett" },
                            "icon": "fa-plus",
                            "color": "blue",
                            "width": 2,
                            "form": { "form": "ModuleForm" }
                        },
                    ]
                },


                //Weitere Seiten für die Kachel "Module" hinzufügen 
                {
                    "id": "modulePage", 
                    "elementList": [
                        {
                            "type": "backbutton", 
                        },
                        {
                            "type": "newButton", 
                            "name": { "default": "Neues Modul" },
                            "icon": "fa-plus", 
                            "color": "green", 
                            "width": 2,
                            "form": { "form": "ModuleForm" } 

                        },
                        {
                            "type": "newButton", 
                            "name": { "default": "Termine hinzufügen" },
                            "icon": "fa-plus", 
                            "color": "pink", 
                            "width": 2,
                            "form": { "form": "ModuleForm" } 
                        },
                        {
                            "type": "button", 
                            "name": { "default": "Kontakt Student Services" },
                            "icon": "fa-plus", 
                            "color": "yellow", 
                            "width": 2,
                            "form": { "form": "ModuleForm" } 
                        },
                        {
                            "type": "button", 
                            "name": { "default": "Student Jobs" },
                            "icon": "fa-plus", 
                            "color": "red", 
                            "width": 2,
                            "form": { "form": "ModuleForm" } 
                        },
                        {
                            "type": "button", 
                            "name": { "default": "Schwarzes Brett" },
                            "icon": "fa-plus", 
                            "color": "blue", 
                            "width": 2,
                            "form": { 
                                "form": "ModuleForm" } 
                        },
                    ]
                },

        
                
                //ToDo-Liste
                {
                    "id": "toDoPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": { default: "Neues ToDo"},
                            "icon": "fa-user",
                            "color": "green",
                            "width": 2,
                            "form" : {
                                "form" : "ToDoForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "ToDo",
                            "icon": "fa-user",
                            "color": "wet-asphalt",
                            "search": true,
                            "url": "/todo",
                            "form": {
                                "form": "ToDoForm"
                            }
                        }
                    ]
                },
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
