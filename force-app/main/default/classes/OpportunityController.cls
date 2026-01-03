public with sharing class OpportunityController {
  @AuraEnabled(cacheable=true)
  public static List<Opportunity> getWonOpportunities() {
    return [
      SELECT Id, Name, StageName, CloseDate, Amount
      FROM Opportunity
      WHERE StageName = 'Closed Won'
    ];
  }

  @AuraEnabled(cacheable=true)
  public static List<Opportunity> getLostOpportunities() {
    return [
      SELECT Id, Name, StageName, CloseDate, Amount
      FROM Opportunity
      WHERE StageName = 'Closed Lost'
    ];
  }
}
