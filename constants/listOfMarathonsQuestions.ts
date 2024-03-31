import { EGEMathVectors } from '../marathonsQuestions/EGE.Math.Vectors';
import { EGEPhysicDynamics } from '../marathonsQuestions/EGE.Physics.Dynamics';
import { EGEPhysicsMKT } from '../marathonsQuestions/EGE.Physics.MKT';
import { EGEPhysicsTermodynamics } from '../marathonsQuestions/EGE.Physics.Termodynamics';
import { IMarathonsQuestion } from '../types/interfaces/IMarathonsQuestions';

// List of marathons info
export const listOfMarathonsQuestions: IMarathonsQuestion[] = [EGEPhysicsTermodynamics, EGEPhysicsMKT, EGEPhysicDynamics, EGEMathVectors];
