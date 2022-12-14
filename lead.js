const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({
  Owner: {
    name: String,
    id: String,
    email: String,
  },
  Company: String,
  Email: String,
  $currency_symbol: String,
  $field_states: String,
  Last_Activity_Time: String,
  Industry: String,
  $state: String,
  Unsubscribed_Mode: String,
  $converted: Boolean,
  $process_flow: Boolean,
  Street: String,
  Zip_Code: String,
  id: String,
  $approved: Boolean,
  $approval: {
    delegate: Boolean,
    approve: Boolean,
    reject: Boolean,
    resubmit: Boolean,
  },
  Enrich_Status__s: String,
  Created_Time: String,
  $editable: Boolean,
  City: String,
  No_of_Employees: String,
  State: String,
  Country: String,
  Created_By: {
    name: String,
    id: String,
    email: String,
  },
  Annual_Revenue: Number,
  Secondary_Email: String,
  Description: String,
  Rating: Number,
  $review_process: {
    approve: Boolean,
    reject: Boolean,
    resubmit: Boolean,
  },
  Website: String,
  Twitter: String,
  Salutation: String,
  First_Name: String,
  Full_Name: String,
  Lead_Status: String,
  Record_Image: String,
  Modified_By: {
    name: String,
    id: String,
    email: String,
  },
  $review: String,
  Skype_ID: String,
  Phone: String,
  Email_Opt_Out: Boolean,
  Designation: String,
  Modified_Time: String,
  $converted_detail: {},
  Unsubscribed_Time: String,
  Mobile: String,
  $orchestration: Boolean,
  s: String,
  Last_Name: String,
  $in_merge: Boolean,
  Lead_Source: String,
  Tag: [],
  Fax: String,
  $approval_state: String,
  $pathfinder: String,
  Last_Enriched_Time__s: String,
});

module.exports = mongoose.model("Lead", LeadSchema);
