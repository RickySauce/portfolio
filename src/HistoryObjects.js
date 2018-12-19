class HistoryObject {
  constructor(title, startDate, endDate) {
    this.title = title
    this.startDate = startDate
    this.endDate = endDate
  }
}

class SchoolHistory extends HistoryObject {
  constructor(title, startDate, endDate, degree = null, focus = null){
    super(title, startDate, endDate)
      this.degree = degree
      this.focus = focus
  }
}

class WorkHistory extends HistoryObject {
  constructor(title, startDate, endDate, jobTitle){
    super(title, startDate, endDate)
      this.jobTitle = jobTitle
  }
}

export {SchoolHistory, WorkHistory}
