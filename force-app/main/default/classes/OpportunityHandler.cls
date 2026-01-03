public with sharing class OpportunityHandler {
  public static void preventDelete(List<Opportunity> oppList) {
    for (Opportunity opp : oppList) {
      if (opp.StageName == 'Closed Won') {
        opp.addError(
          'You cannot delete an Opportunity record with stage as closed won.'
        );
      }
    }
  }
}
