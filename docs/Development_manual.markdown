## **Development Manual**

*Hvað þarf til að byrja verkefnið á nýrri tölvu* - 

Við byrjum á því að búa til eða fara inná Github aðgang. Þar býrðu til nýtt reposatory þar sem þú munt geyma öll þau forrit og skjöl sem eru partur af verkefninu. Mælum með að nefna reposatory-ið eitthvað sem mun skýra hvað það er fyrir.
Sækja þarf Git Bash og læra á allar þær git skipanir eins og t.d *Add, Commit og Push.*
Þegar það ef komið notum við forritunarumhverfi sem leyfir okkur að forrita í Javascript. Byrjaðu á því að lesa um TicTacToe og hvernig er best að forrita það ef þú ert ekki viss um hvar þú átt að byrja.
Þegar þú ert kominn með góða hugmynd um hvernig þú villt hafa kóðann byrjar þú að skrifa test fyrir fyrsta function-ið áður en þú byrjar að kóða.
Til að geta búið til test fyrir forritið sækjum við NodeJS og Jest. Þegar það er komið getum við notað npm skipunina sem hjálpar okkur með testin. 
Við byrjum á því að skrifa forritið test.js sem tekur function frá forritinu sem við viljum testa. Þegar við erum búinn að skrifa testcase byrjum við að skrifa kóðan sem við ætlum að testa.
Þegar kóðinn og test-ið er komið skrifum við npm test inn í bash skelina. Npm test skipunin mun sýna hvort að test-ið sem við gerðum virkar eða ekki. 
Notum við þá *git add, git commit og git push* skipunina til að koma öllu því sem við erum búinn að gera upp á Git reposatory-ið okkar.
Víst að npm test virkar hjá okkur og við kunnum að push-a þessu á Github, þá getum byrjað að nota **Circleci**. Circleci er síða sem tengist Github og keyrir þá kóða sem við segjum því að keyra. Til þess að geta notað Circleci förum við inná síðuna þeirra og fylgjum leiðbeiningunum sem eru þar inni.
