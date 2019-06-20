#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { MeetUpFargateDemoServiceStack } from '../lib/meet_up_fargate_demo_service-stack';

const app = new cdk.App();
new MeetUpFargateDemoServiceStack(app, 'MeetUpFargateDemoServiceStack');
