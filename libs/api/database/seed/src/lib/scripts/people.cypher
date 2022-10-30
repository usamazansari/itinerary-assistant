:begin
CREATE CONSTRAINT ON (node:`UNIQUE IMPORT LABEL`) ASSERT (node.`UNIQUE IMPORT ID`) IS UNIQUE;
:commit
CALL db.awaitIndexes(300);
:begin
UNWIND [{_id:0, properties:{website:"https://www.eramshaikh.com", gender:"FEMALE", phone:"*************", fullName:"Eram Shaikh", dateOfBirth:date('1993-04-18'), id:"2227f4ad-b443-4285-955d-e2d44db8460f", email:"eramshaikh22@gmail.com"}}, {_id:2, properties:{website:"https://usamazansari.com", gender:"MALE", phone:"*************", fullName:"Usama Ansari", dateOfBirth:datetime('1993-10-25T00:00:00-05:30'), id:"149b729f-a0a8-4025-9d3a-a25ff6a9e28a", email:"usamazansari@outlook.com"}}, {_id:20, properties:{gender:"FEMALE", phone:"*************", fullName:"Eram Ansari", dateOfBirth:datetime('1993-04-18T00:00:00-05:30'), id:"5f025c6b-82bf-4ba7-8dd8-bff027b56102"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:PERSON;
UNWIND [{_id:17, properties:{start:date('2015-02-15'), name:"passport-validity", end:date('2025-02-14')}}, {_id:24, properties:{start:datetime('2015-01-14T00:00:00-05:30'), end:datetime('2026-04-15T00:00:00-05:30'), id:"207811f2-f9e5-4336-a1e5-ba17fab234da"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:TENURE;
UNWIND [{_id:15, properties:{lastName:"Ansari", firstName:"Eram", nickname:"Rum", middleName:"Usama", salutation:"Mrs.", id:"9d00ca6f-f2ed-41d2-8577-a4b3766dbed8"}}, {_id:18, properties:{lastName:"Ansari", firstName:"Usama", nickname:"Sam", middleName:"Zulfiquar", salutation:"Mr.", suffix:""}}, {_id:19, properties:{lastName:"Shaikh", firstName:"Eram", nickname:"Rum", middleName:"Abdul Aziz", salutation:"Ms.", suffix:""}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:DEMOGRAPHICS;
UNWIND [{_id:3, properties:{plusCode:"3V7J+59 Mumbai, Maharashtra", id:"ac693590-4625-4008-8c8a-0a6d054d07df"}}, {_id:23, properties:{plusCode:"5XWQ+M9 Thane, Maharashtra, India", id:"74c5317e-8353-495b-bf30-f2664f5f970b"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:LOCATION;
UNWIND [{_id:6, properties:{name:"LinkedIn", url:"https://www.linkedin.com/in/usama-ansari-81380080/"}}, {_id:7, properties:{name:"Instagram", url:"https://instagram.com/usamazansari"}}, {_id:8, properties:{name:"GitHub", url:"https://github.com/usamazansari"}}, {_id:9, properties:{name:"LinkedIn", url:"https://www.linkedin.com/in/shaikheram/"}}, {_id:10, properties:{name:"Instagram", url:"https://instagram.com/_rum_rum"}}, {_id:16, properties:{name:"Facebook", id:"044fd6f6-f765-4a15-9f99-08bde9b1bad5", url:"https://www.facebook.com/eram.ansari"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:SOCIAL_CONNECTION;
UNWIND [{_id:5, properties:{zip:"400024", country:"India", city:"Mumbai", street:"S. G. Barve Marg", locality:"Nehru Nagar", suburb:"Kurla East", id:"cfaad0a2-4fae-429b-bad1-d093bbfae1cb", state:"Maharashtra", landmark:"Opposite Kurla Railway Station", wing:"A", apartment:"Sayba Nx", room:"1301"}}, {_id:22, properties:{zip:"400605", country:"India", city:"Thane", street:"Mumbai - Pune Road", locality:"Shastri Nagar", suburb:"Kalwa West", id:"dd72df4e-b75f-415c-80d2-131f9612200c", state:"Maharashtra", wing:"B", apartment:"Sai Shraddha Apt.", room:"204"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:ADDRESS;
UNWIND [{_id:1, properties:{name:"rent-address-coordinates", coordinates:point({x: 72.8808394, y: 19.0628191, crs: 'wgs-84'}), id:"8fc71dd8-0785-48c4-982c-0cd452edebe8"}}, {_id:26, properties:{coordinates:point({x: 72.8808394, y: 19.0628191, crs: 'wgs-84'}), id:"18a6aa34-36a8-4ee3-93d2-eb72e7b2f6a1"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:COORDINATES;
UNWIND [{_id:11, properties:{number:"", name:"Aadhar Card", id:"db6832bf-461c-484f-90de-4527fdc63189", type:"government"}}, {_id:12, properties:{number:"", name:"Passport", id:"74b47bdc-afff-4c4c-a8c9-efca4ccc53fd", type:"passport"}}, {_id:13, properties:{number:"************", name:"Aadhar Card", id:"1328e24d-6047-4d5a-a226-970bfa4ff378", type:"government"}}, {_id:14, properties:{number:"********", name:"Passport", id:"16bebd6f-e852-4f63-9d44-d50481df893c", type:"passport"}}, {_id:25, properties:{number:"**********", name:"PAN Card", id:"66a392a8-be4e-47a4-9ebb-b44f9b592106", type:"government"}}] AS row
CREATE (n:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row._id}) SET n += row.properties SET n:IDENTIFICATION;
:commit
:begin
UNWIND [{start: {_id:15}, end: {_id:20}, properties:{}}, {start: {_id:18}, end: {_id:2}, properties:{}}, {start: {_id:19}, end: {_id:0}, properties:{}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:DEMOGRAPHICS_OF]->(end) SET r += row.properties;
UNWIND [{start: {_id:5}, end: {_id:2}, properties:{}}, {start: {_id:5}, end: {_id:0}, properties:{}}, {start: {_id:22}, end: {_id:20}, properties:{}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:ADDRESS_OF]->(end) SET r += row.properties;
UNWIND [{start: {_id:9}, end: {_id:0}, properties:{}}, {start: {_id:7}, end: {_id:2}, properties:{}}, {start: {_id:6}, end: {_id:2}, properties:{}}, {start: {_id:8}, end: {_id:2}, properties:{}}, {start: {_id:10}, end: {_id:0}, properties:{}}, {start: {_id:16}, end: {_id:20}, properties:{}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:SOCIAL_CONNECTION_OF]->(end) SET r += row.properties;
UNWIND [{start: {_id:11}, end: {_id:0}, properties:{}}, {start: {_id:12}, end: {_id:0}, properties:{}}, {start: {_id:13}, end: {_id:2}, properties:{}}, {start: {_id:14}, end: {_id:2}, properties:{}}, {start: {_id:25}, end: {_id:20}, properties:{}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:IDENTIFICATION_OF]->(end) SET r += row.properties;
UNWIND [{start: {_id:5}, end: {_id:3}, properties:{}}, {start: {_id:22}, end: {_id:23}, properties:{}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_LOCATION]->(end) SET r += row.properties;
UNWIND [{start: {_id:25}, end: {_id:24}, properties:{}}, {start: {_id:14}, end: {_id:17}, properties:{}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:HAS_VALIDITY]->(end) SET r += row.properties;
UNWIND [{start: {_id:1}, end: {_id:3}, properties:{}}, {start: {_id:26}, end: {_id:23}, properties:{}}] AS row
MATCH (start:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.start._id})
MATCH (end:`UNIQUE IMPORT LABEL`{`UNIQUE IMPORT ID`: row.end._id})
CREATE (start)-[r:COORDINATES_OF]->(end) SET r += row.properties;
:commit
:begin
MATCH (n:`UNIQUE IMPORT LABEL`)  WITH n LIMIT 20000 REMOVE n:`UNIQUE IMPORT LABEL` REMOVE n.`UNIQUE IMPORT ID`;
:commit
:begin
DROP CONSTRAINT ON (node:`UNIQUE IMPORT LABEL`) ASSERT (node.`UNIQUE IMPORT ID`) IS UNIQUE;
:commit
