import assert from 'assert';
import nameMapper from '../../../src/mapRow/mappers/name';
import { Row } from '../../../src/types';
// This is the function we are testing
// import nameMapper from '../../../src/mapRow/mappers/name';
  
  describe('#nameMapper', () => {
    it('should map', () => {
      assert.deepStrictEqual(true, true);
    });
  
    it('should map names correctly when they are present', () => {
      // Define sample row data for testing with names present
      const sampleRow: Row = {
        'first name': 'John',
        'last name': 'Doe',
        email: '',
        'email 2': '',
        'email 3': '',
        'address line one': '',
        'address line two': '',
        city: '',
        country: '',
        postcode: ''
      };
      // Call the name mapping function
      const mappedNames = nameMapper(sampleRow);
      // Define the expected mapped names
      const expectedMappedNames = {
        first: 'John',
        last: 'Doe',
      };
      // Assert that the mapped names match the expected result
      assert.deepStrictEqual(mappedNames, expectedMappedNames);
    });
  
    it('should map names as null when they are empty', () => {
      // Define sample row data for testing with empty names
      const sampleRow: Row = {
        'first name': '',
        'last name': '   ',
        email: '',
        'email 2': '',
        'email 3': '',
        'address line one': '',
        'address line two': '',
        city: '',
        country: '',
        postcode: ''
      };
      // Call the name mapping function
      const mappedNames = nameMapper(sampleRow);
      // Define the expected mapped names
      const expectedMappedNames = {
        first: null,
        last: null,
      };
      // Assert that the mapped names match the expected result
      assert.deepStrictEqual(mappedNames, expectedMappedNames);
    });
  
    it('should map names as null when they are null or undefined', () => {
      // Define sample row data for testing with null or undefined names
      const sampleRow: Row = {
        'first name': null,
        'last name': undefined,
        email: '',
        'email 2': '',
        'email 3': '',
        'address line one': '',
        'address line two': '',
        city: '',
        country: '',
        postcode: ''
      };
      // Call the name mapping function
      const mappedNames = nameMapper(sampleRow);
      // Define the expected mapped names
      const expectedMappedNames = {
        first: null,
        last: null,
      };
      // Assert that the mapped names match the expected result
      assert.deepStrictEqual(mappedNames, expectedMappedNames);
    });
  
  });

