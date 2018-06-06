export class Upload {
    constructor(
        public id?: number,
        public patientId?: number,
        public date?: Date,
        public title?: String,
        public description?: String,
        public type?: String,
        public file?: File
    ) { }
}
