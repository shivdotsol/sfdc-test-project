public with sharing class CandidateControllerClass {
  @AuraEnabled(cacheable=true)
  public static List<Candidate__c> getCandidateDetails(String searchKey) {
    return [
      SELECT
        Id,
        First_Name__c,
        Last_Name__c,
        Email__c,
        Phone__c,
        Experience_Level__c
      FROM Candidate__c
      WHERE
        First_Name__c LIKE :('%' + searchKey + '%')
        OR Last_Name__c LIKE :('%' + searchKey + '%')
      LIMIT 10
    ];
  }

  @AuraEnabled
  public static Candidate__c getCandidateById(Id candidateId) {
    return [
      SELECT
        First_Name__c,
        Last_Name__c,
        Email__c,
        Phone__c,
        Country__c,
        State_Province__c,
        City__c,
        Street__c
      FROM Candidate__c
      WHERE Id = :candidateId
    ];
  }
}
