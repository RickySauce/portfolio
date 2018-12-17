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
  constructor(title, startDate, endDate, location, jobTitle, description){
    super(title, startDate, endDate)
      this.location = location
      this.jobTitle = jobTitle
      this.description = description
  }
}

export {SchoolHistory, WorkHistory}
