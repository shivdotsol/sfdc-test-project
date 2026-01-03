public with sharing class OpportunityLightningDataTable {
  @AuraEnabled
  public static void deleteOpportunity(string oppId) {
    try {
      Opportunity opp = new Opportunity();
      opp.Id = oppId;
      delete opp;
    } catch (DmlException err) {
      throw new AuraHandledException(err.getMessage());
    }
  }

  @AuraEnabled(cacheable=true)
  public static List<Opportunity> getAllOpportunities() {
    return [
      SELECT Id, Name, StageName, CloseDate, Amount
      FROM Opportunity
      ORDER BY CreatedDate DESC
    ];
  }
}
