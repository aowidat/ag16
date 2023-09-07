export class Data {
  studySource: number
  studyDestSchema: string
  studyDestLastSync: string
  running: boolean

  constructor(snapshot: any) {
    this.studySource = snapshot.studySource;
    this.studyDestSchema = snapshot.studyDestSchema;
    this.studyDestLastSync = snapshot.studyDestLastSync;
    this.running = snapshot.running;
  }
}
