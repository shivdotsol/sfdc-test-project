public with sharing class OpportunityGraphController {
  @AuraEnabled(cacheable=true)
  public static List<Opportunity> getOpportunities() {
    return [
      SELECT Name, Amount
      FROM Opportunity
      WHERE Amount != NULL
      LIMIT 10
    ];
  }
}
