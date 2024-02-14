gcloud functions deploy asocial-gcf --project=asocial-test1 --gen2 --runtime=nodejs20 --region=europe-west1 --source=. --entry-point=asocialGCF --trigger-http --allow-unauthenticated

https://console.cloud.google.com/functions/details/europe-west1/asocial-gcf?project=asocial-test1

https://europe-west1-asocial-test1.cloudfunctions.net/asocial-gcf

Debug: npm run start
