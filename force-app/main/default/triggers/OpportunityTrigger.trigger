trigger OpportunityTrigger on Opportunity(before delete) {
  if (Trigger.isBefore) {
    OpportunityHandler.preventDelete(Trigger.old);
  }
}
