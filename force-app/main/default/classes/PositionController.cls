public with sharing class PositionController {
  @AuraEnabled(cacheable=true)
  public static List<Position__c> getPositions() {
    return [
      SELECT Id, Name, Date_Opened__c, Close_Date__c, Department__c, Location__c
      FROM Position__c
    ];
  }
}
