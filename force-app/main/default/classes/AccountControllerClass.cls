public with sharing class AccountControllerClass {
  @AuraEnabled(cacheable=true)
  public static List<Account> searchAccount(String searchKey) {
    return [
      SELECT Id, Name, Type, Industry
      FROM Account
      WHERE Name LIKE :('%' + searchKey + '%')
      LIMIT 10
    ];
  }

  @AuraEnabled(cacheable=true)
  public static Account getAccountDetails(Id accountId) {
    return [
      SELECT
        Name,
        Type,
        Industry,
        AnnualRevenue,
        BillingCity,
        BillingState,
        BillingCountry
      FROM Account
      WHERE Id = :accountId
    ];
  }
}
