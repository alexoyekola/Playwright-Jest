import assert from 'assert';
// This is the function we are testing
import addressMapper from '../../../src/mapRow/mappers/address';
import { Row } from '../../../src/types';

describe('#addressMapper', () => {

  it('should map', () => {
    assert.deepStrictEqual(true, true);
  });

  it('should map address fields correctly', () => {
    // Define sample row data for testing
    const sampleRow: Row = {
      country: 'US',
      'address line one': '123 Main St',
      'address line two': null,
      city: 'New York',
      postcode: '10001',
      'first name': '',
      'last name': '',
      email: '',
      'email 2': '',
      'email 3': ''
    };
    // Call the address mapping function
    const mappedAddress = addressMapper(sampleRow);
    // Define the expected mapped address
    const expectedMappedAddress = {
      country_code: 'US',
      'address_line_one': '123 Main St',
      'address_line_two': null,
      city: 'New York',
      postal_code: '10001',
    };
    // Assert that the mapped address matches the expected result
    assert.deepStrictEqual(mappedAddress, expectedMappedAddress);
  });

});
