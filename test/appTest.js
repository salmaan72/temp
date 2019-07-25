import { assert } from 'chai';
import { App, stringReconstruct, COMMA_ENTRIES, DOLLAR_ENTRIES } from '../app';

describe('App', function() {
    it('static function run should be defined', function() {
        assert.isFunction(App.run, 'function run is not defined');
    });

    describe('Inputs', function() {
        it('COMMA_ENTRIES array is non empty', function() {
            assert.notEqual(COMMA_ENTRIES.length, 0, 'array is empty');
        });
    
        it('DOLLAR_ENTRIES array is non empty', function() {
            assert.notEqual(DOLLAR_ENTRIES.length, 0, 'array is empty');
        });
    
        it('strings of COMMA_ENTRIES are valid (contains commas)', function() {
            const n = COMMA_ENTRIES.map(str => {
                return str.search(/,/);
            });
            if(n.includes(-1)) {
                assert.fail('some strings doest contain commas');
            }
        });
    
        it('strings of DOLLAR_ENTRIES are valid (contains dollars)', function() {
            const n = DOLLAR_ENTRIES.map(str => {
                return str.search(/\$/);
            });
            if(n.includes(-1)) {
                assert.fail('some strings doest contain dollars');
            }
        });
    });
})