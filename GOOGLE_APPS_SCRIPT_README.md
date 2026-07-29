# Google Apps Script Code for Conference Registration

## Issue Fixed
The original script was causing data misalignment in the spreadsheet because the payload structure didn't match the expected column order. This updated version ensures data goes to the correct columns.

## Updated App Script Code
Copy and paste this code into your Google Apps Script:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Log the received data for debugging
    console.log('Received data:', data);
    console.log('Data keys:', Object.keys(data));

    // Create a new row array with explicit column mapping
    // This ensures data goes to the correct columns regardless of payload order
    const newRow = [
      '', // Column A - will be filled below
      '', // Column B - will be filled below
      '', // Column C - will be filled below
      '', // Column D - will be filled below
      '', // Column E - will be filled below
      '', // Column F - will be filled below
      '', // Column G - will be filled below
      '', // Column H - will be filled below
      '', // Column I - will be filled below
      '', // Column J - will be filled below
      '', // Column K - will be filled below
      '', // Column L - will be filled below
      '', // Column M - will be filled below
      '', // Column N - will be filled below
      '', // Column O - will be filled below
      '', // Column P - will be filled below
    ];

    // Map data to specific columns (0-indexed)
    newRow[0] = data.name || '';                                    // Column A - Name
    newRow[1] = data.dateOfBirth || '';                             // Column B - Date of Birth
    newRow[2] = data.gender || '';                                  // Column C - Gender
    newRow[3] = data.nationalMedicalAssociation || '';              // Column D - National Medical Association
    newRow[4] = data.specialization || '';                          // Column E - Specialization
    newRow[5] = data.yearOfGraduation || '';                        // Column F - Year of Graduation
    newRow[6] = data.medicalCouncilRegNumber || '';                 // Column G - Medical Council Registration Number
    newRow[7] = data.email || '';                                   // Column H - Email Address
    newRow[8] = data.address || '';                                 // Column I - Address
    newRow[9] = data.cellPhone || '';                               // Column J - Cell Phone Number
    newRow[10] = data.countryCode ? `"${data.countryCode}"` : '';   // Column K - Country Code (wrapped in quotes to prevent formula parsing)
    newRow[11] = data.bankDetails || '';                             // Column L - Bank Details
    newRow[12] = data.registrationType || '';                        // Column M - Registration Type
    newRow[13] = data.fees || '';                                    // Column N - Fees
    newRow[14] = data.transactionDetails || '';                      // Column O - Transaction Details
    newRow[15] = new Date();                                         // Column P - Timestamp

    // Log the row data for debugging
    console.log('Row to append:', newRow);

    // Append the row
    sheet.appendRow(newRow);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        result: 'success', 
        row: sheet.getLastRow(),
        message: 'Registration data saved successfully',
        data: newRow
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log error for debugging
    console.error('Error in doPost:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        result: 'error', 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Sheet Headers Setup
Make sure your Google Sheet has these headers in Row 1 (exact order):

| Column | Header |
|--------|--------|
| A | Name |
| B | Date of Birth |
| C | Gender |
| D | National Medical Association |
| E | Specialization |
| F | Year of Graduation |
| G | Medical Council Registration Number |
| H | Email Address |
| I | Address |
| J | Cell Phone Number |
| K | Country Code |
| L | Bank Details |
| M | Registration Type |
| N | Fees |
| O | Transaction Details |
| P | Timestamp |

**Important:** Make sure your sheet headers match this exact order. The script now uses explicit column mapping, so data will go to the correct columns regardless of the payload order.

## Changes Made
1. **Added error handling** with try-catch block
2. **Added null checks** (|| '') to prevent undefined values
3. **Added console logging** for debugging
4. **Improved response structure** with better error messages
5. **Added proper error responses** for debugging

## Testing
After updating the script:
1. Deploy the script again
2. Test with the frontend form
3. Check the console logs in Google Apps Script for any errors
4. Verify data appears in correct columns in the spreadsheet

## Frontend Payload Structure
The frontend should send data in this exact structure:
```javascript
{
  "name": "John Doe",
  "dateOfBirth": "1990-01-01",
  "gender": "Male",
  "state": "California",
  "nationalMedicalAssociation": "American Medical Association",
  "specialization": "Cardiology",
  "yearOfGraduation": "2015",
  "medicalCouncilRegNumber": "12345",
  "email": "john@example.com",
  "address": "123 Main St",
  "cellPhone": "1234567890",
  "bankDetails": "Bank of America, Account: 123456",
  "fees": "5000",
  "transactionDetails": "TXN123456789"
}
```
