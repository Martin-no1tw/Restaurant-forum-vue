import moment from 'moment'

export const fromNowFilters = {
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    }
  }
}